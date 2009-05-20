class Aws::InstancesController < ApplicationController
  
  def index
    @instances = AmazonServices[:ec2].describe_instances.reverse
  end
  
  def terminate
    AmazonServices[:ec2].terminate_instances(params[:id])
    redirect instances_path
  end
  
  def output
    @output = AmazonServices[:ec2].get_console_output(params[:id])
  end
  
  def reboot
    AmazonServices[:ec2].reboot_instances([params[:id]])
    redirect instances_path
  end
end