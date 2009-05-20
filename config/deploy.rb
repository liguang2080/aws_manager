#vlad deploy variable
set :domain, "rails@192.168.1.152"

deploy_dir = "projects/ultratrace_3_0"

#vlad deploy
namespace :vlad do

  remote_task :deploy => [:push_code, :update_code, :sql_migrate, :restart_lighttpd, :restart_fcgi, :refresh_crontab]

  task :push_code do
    notice "---start push code---"
    Dir.chdir(Rails.root.to_s)
    `git push rails@192.168.1.152:~/projects/ultratrace_3_0.git master`
  end

  remote_task :update_code do
    notice "---start update code---"
    run "cd #{deploy_dir}; /usr/local/git/bin/git pull"
  end

  remote_task :sql_migrate do
    notice "---start migrate---"
    run "cd #{deploy_dir}; /usr/bin/rake db:migrate RAILS_ENV=production"
  end

  remote_task :restart_lighttpd do 
    notice "---start restart lighttpd---"
    run "sudo /etc/init.d/lighttpd restart"
  end

  remote_task :restart_fcgi do 
    notice "---start restart_fcgi---"
    run "sudo /etc/lighttpd/dispatch.sh restart"
  end  

  remote_task :refresh_crontab do
    notice "---start resresh crontab---"
    # run "crontab #{deploy_to}/config/schedule.sh"
  end
end
