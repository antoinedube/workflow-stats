#
# Cookbook Name:: workflowstats
# Recipe:: database_config
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

directory '/home/vagrant/workflow-stats/server/database' do
  owner 'vagrant'
  group 'vagrant'
  mode '0755'
  action :create
end

template '/home/vagrant/workflow-stats/database/pg-config.json' do
  source 'pg-config.json.erb'
  owner 'vagrant'
  group 'vagrant'
  variables(
    :database => "wfs",
    :username => "wfs",
    :password => "wfs",
    :host => "localhost",
    :port => "5432",
    :dialect => "postgres"
  )
end
