
# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|encrypted_password|integer|null: false, foreign_key: true|
|reset_password_token|integer|null: false, foreign_key: true|
|reset_password_sent_at|datetime|null: false, foreign_key: true|
|remember_created_at|datetime|null: false, foreign_key: true|
|created_at|datetime|null: false, foreign_key: true|
|update_at|datetime|null: false, foreign_key: true|
|logged_in_at|datetime|null: false, foreign_key: tru|
|logged_out_on|date|null: false, foreign_key: tru|


## postsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|created_at|datetime|null: false, foreign_key: true|
|update_at|datetime|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user