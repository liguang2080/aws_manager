class Aws::KeysController < ApplicationController
  
  def index
    @keys = AmazonServices[:ec2].describe_key_pairs
  end
  
  def delete
    AmazonServices[:ec2].delete_key_pair(params[:id])
    redirect_to :action => "index"
  end
  
  def create
    output = AmazonServices[:ec2].create_key_pair(params[:key_name])
    render :text => "<pre>" + output[:aws_material] + "</pre>"
  end
  
end