cfg = rs.conf();
cfg.members[0].hidden = true
cfg.members[2].priority = 2
rs.reconfig(cfg)
rs.stepDown()
