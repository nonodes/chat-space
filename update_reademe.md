
# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|
|email|string|null: false, unique: true|

### Association
- has_many :group
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user