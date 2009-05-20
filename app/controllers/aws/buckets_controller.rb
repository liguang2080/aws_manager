class Aws::BucketsController < ApplicationController

  # before_filter :refresh_buckets, :only => [:index, :create, :delete]

  def index
    render :text => "hah"
  end 

  def create
    if (params[:bucket_name].match(/[^\w\d_]/) || params[:bucket_name].blank?)
      flash[:warning] = "桶名只能使用英文数字和_!"
    else
      AWS::S3::Bucket.create(params[:bucket_name])
    end
    redirect_to :action => "index"
  end
  
  def delete
    AWS::S3::Bucket.delete(params[:id], :force => true)
    redirect_to :action => "index"
  end

  private 
  def refresh_buckets
    # AWS::S3::Base.establish_connection!(
    #         :access_key_id     => AMAZON_ACCESS_KEY_ID,
    #         :secret_access_key => AMAZON_SECRET_ACCESS_KEY
    #       )
  end
  # 
  # 
  # def create
  #   if (params[:name].blank? || params[:description].blank? || params[:name].match(/[^\w]/))
  #     flash[:warning] = "请输入组名与描述,且组名只能使用英文"
  #   else
  #     AmazonServices[:ec2].create_security_group(params[:name], params[:description])
  #   end
  #   redirect_to :action => "index"
  # end
  # 
  # def delete
  #   #在本身有_字符时,会出现问题.所以建议不要使用_
  #   AmazonServices[:ec2].delete_security_group(params[:id])
  #   redirect_to :action => "index" 
  # end
  # 
  # #delete 组规则
  # def revoke
  #   if params[:group]
  #     AmazonServices[:ec2].revoke_security_group_named_ingress(params[:id], params[:owner], params[:group])
  #   else
  #     AmazonServices[:ec2].revoke_security_group_IP_ingress(params[:id], params[:from], params[:to], params[:protocol], params[:ip])
  #   end
  #   redirect_to :action => "index" 
  # end
  # 
  # #增加组规则
  # def authorize
  #   AmazonServices[:ec2].authorize_security_group_IP_ingress(params[:id], params[:from], params[:to], params[:protocol], params[:ip])
  #   redirect_to :action => "index" 
  # end
end