require(File.join(File.dirname(__FILE__), 'config', 'boot'))
require(File.join(File.dirname(__FILE__), 'config', 'environment'))

require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'

require 'tasks/rails'
require 'rubygems'

require 'highline/import'

# Create a color scheme, naming color patterns with symbol names.
ft = HighLine::ColorScheme.new do |cs|
        cs[:headline]        = [ :bold, :yellow, :on_black ]
        cs[:horizontal_line] = [ :bold, :white, :on_blue]
        cs[:even_row]        = [ :green ]
        cs[:odd_row]         = [ :magenta ]
     end

# Assign that color scheme to HighLine...
HighLine.color_scheme = ft

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
  say("<%= color('#{msg}', :horizontal_line) %>")
end

