class Aws::AddressesController < ApplicationController

  def index
    @addresses = AmazonServices[:ec2].describe_addresses
    @instances = AmazonServices[:ec2].describe_instances.reverse
  end

  def allocate
    AmazonServices[:ec2].allocate_address
    redirect_to :action => "index"
  end

  def release
    AmazonServices[:ec2].release_address(params[:id].url_to_ip)
    redirect_to :action => "index"
  end

  def associate
    AmazonServices[:ec2].associate_address(params[:instance_id],params[:id].url_to_ip)
    redirect_to :action => "index"
  end

  def disassociate
    AmazonServices[:ec2].disassociate_address(params[:id].url_to_ip)
    redirect_to :action => "index"
  end
end