#vlad deploy variable
set :domain, "rails@192.168.1.152"
deploy_dir = "projects/ultratrace_3_0"

#vlad deploy
namespace :vlad do

  remote_task :deploy => [:push_code, :update_code,  :sql_migrate, :restart_nginx, :restart_mongrel_cluster, :refresh_crontab]

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
    run "cd #{deploy_dir}; /usr/local/ruby/bin/rake db:migrate RAILS_ENV=production"
  end

  remote_task :restart_nginx do 
    notice "---restart nginx---"
    run "sudo /etc/init.d/nginx_ctl reconfigure"
  end

  remote_task :restart_mongrel_cluster do 
    notice "---restart_mongrel_cluster---"
    run "sudo /etc/init.d/mongrel_ctl restart"
  end  

  remote_task :refresh_crontab do
    notice "---resresh crontab---"
    # run "crontab #{deploy_to}/config/schedule.sh"
  end
end
