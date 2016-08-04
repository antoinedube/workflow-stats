#
# Cookbook Name:: workflowstats
# Recipe:: database_config
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

template '/home/vagrant/workflow-stats/server/database/config.json' do
  source 'config.json.erb'
end
