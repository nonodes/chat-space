
# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false,|
|nickname|string|null: false,|
|email|string|null: false, unique: true|


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|


## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|index: true, foreign_key: true|
|group|references|index: true, foreign_key: true|


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|
|image|string|




## AssociationO

#### user.rbファイル

```
class User < ApplicationRecord
  has_many :groups, through: :group_users
  has_many :group_users
  has_many :message
end
```
    
#### group.rbファイル
```
class Group < ApplicationRecord
    has_many :users, through: :group_users
    has_many :group_users
    has_many :message
    accepts_nested_attributes_for :group_users
end
```


#### group_user.rbファイル

```
class GroupUser < ApplicationRecord
  belongs_to :user
  belongs_to :group
  has_many :message
  
end

```

#### message.rbファイル

```
class message < ActiveRecord::Base
  belongs_to :group              
  belongs_to :user                
end
```
