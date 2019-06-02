
# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|
|email|string|null: false, unique: true|


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|
|image|string|




## Association

#### user.rbファイル

```
class User < ApplicationRecord
  has_many :groups, through: :group_users
  has_many :group_users
  has_many :messages
end
```
    
#### group.rbファイル
```
class Group < ApplicationRecord
    has_many :users, through: :group_users
    has_many :group_users
    has_many :messages
    accepts_nested_attributes_for :group_users
end
```


#### group_user.rbファイル

```
class GroupUser < ApplicationRecord
  belongs_to :user
  belongs_to :group
end

```

#### message.rbファイル

```
class message < ActiveRecord::Base
  belongs_to :group              
  belongs_to :user                
end
```
