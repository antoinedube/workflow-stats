#
# Cookbook Name:: workflowstats
# Recipe:: postgres_prod
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

postgres_settings = search(:aws_opsworks_rds_db_instance).first
template '/home/vagrant/workflow-stats/server/database/pg-config.json' do
  source 'pg-config.json.erb'
  owner 'vagrant'
  group 'vagrant'
  variables(
    :database => 'wfs',
    :username => postgres_settings['db_user'],
    :password => postgres_settings['db_password'],
    :hostname => postgres_settings['address'],
    :port => postgres_settings['port']
    :dialent => 'postgres'
  )
end
