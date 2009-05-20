AMAZON_ACCESS_KEY_ID='AKIAIRXV5QKMV54AINLA'
AMAZON_SECRET_ACCESS_KEY='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'


AmazonServices = {
  :ec2 => RightAws::Ec2.new(AMAZON_ACCESS_KEY_ID, AMAZON_SECRET_ACCESS_KEY)
}

AWS::S3::Base.establish_connection!(
        :access_key_id     => AMAZON_ACCESS_KEY_ID,
        :secret_access_key => AMAZON_SECRET_ACCESS_KEY
      )