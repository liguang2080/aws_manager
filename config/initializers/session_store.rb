# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_ultratrace_3.0_session',
  :secret      => '231214de99e6d8d5403365aba0ac42a3a064b9f4efdd68b019f4383ea7cfe4c3731567a7821d3a7330724b6ee7950dad0b09d2f2634c23bfe7b0d4c26745b7a2'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
