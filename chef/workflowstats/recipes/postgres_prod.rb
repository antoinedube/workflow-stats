#
# Cookbook Name:: workflowstats
# Recipe:: postgres_prod
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

postgres_settings = search(:aws_opsworks_rds_db_instance).first
template "#{node['workflowstats']['source_directory']}/server/database/pg-config.json" do
  source 'pg-config.json.erb'
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  variables(
    :database => 'wfs',
    :username => postgres_settings['db_user'],
    :password => postgres_settings['db_password'],
    :host=> postgres_settings['address'],
    :port => postgres_settings['port'],
    :dialect => 'postgres'
  )
end
