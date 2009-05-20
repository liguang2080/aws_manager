require(File.join(File.dirname(__FILE__), 'config', 'boot'))
require(File.join(File.dirname(__FILE__), 'config', 'environment'))

require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'

require 'tasks/rails'
require 'rubygems'
begin
  require 'vlad'
  Vlad.load(:app => nil,
      :config => 'config/deploy.rb',
      :core   => :core,
      :scm    => :git,
      :web    => nil)
rescue LoadError
end


def notice(msg)
  puts msg
end