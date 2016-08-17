#
# Cookbook Name:: workflowstats
# Recipe:: postgres_prod
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

template '/home/vagrant/workflow-stats/server/database/pg-config.json' do
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
