#
# Cookbook Name:: workflowstats
# Recipe:: postgres_dev
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

template "#{node['workflowstats']['source_directory']}/server/database/pg-config.json" do
  source 'pg-config.json.erb'
  owner node['workflowstats']['user']
  group node['workflowstats']['group']
  variables(
    :database => "wfs",
    :username => "wfs",
    :password => "wfs",
    :host => "10.135.174.55",
    :port => "5432",
    :dialect => "postgres"
  )
end
