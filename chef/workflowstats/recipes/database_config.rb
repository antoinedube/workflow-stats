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

template '/home/vagrant/workflow-stats/server/database/redis-config.json' do
  source 'redis-config.json.erb'
  owner 'vagrant'
  group 'vagrant'
  variables(
    :host => "localhost",
    :port => "6379",
    :ttl => "3600"
  )
end
