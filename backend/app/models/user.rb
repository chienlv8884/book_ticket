class User < ApplicationRecord
    before_validation -> { Logger.new("t1.log").info("before_validation") }
    before_create -> { Logger.new("t1.log").info("before_create") }
    before_save -> { Logger.new("t1.log").info("before_save") }
    before_commit -> { Logger.new("t1.log").info("before_commit") }

    after_validation -> { Logger.new("t1.log").info("after_validation") }
    after_create -> { Logger.new("t1.log").info("after_create") }
    after_save -> { Logger.new("t1.log").info("after_save") }
    after_commit -> { Logger.new("t1.log").info("after_commit") }
    after_rollback -> { Logger.new("t1.log").info("after_rollback") }

    after_initialize -> { Logger.new("t1.log").info("after_initialize") }
    after_find -> { Logger.new("t1.log").info("after_find") }
    after_touch -> { Logger.new("t1.log").info("after_touch") }
end
