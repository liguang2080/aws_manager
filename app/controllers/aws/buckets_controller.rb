class Aws::BucketsController < ApplicationController

  def index
    @buckets = AWS::S3::Service.buckets(true)
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
  
  def objects
    @bucket = AWS::S3::Bucket.find(params[:id])
    @objects = @bucket.objects(:reload)
  end
end