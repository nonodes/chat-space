
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
|text|string|
|image|string|

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|index: true, foreign_key: true|
|group|references|ndex: true, foreign_key: true|




## Association

#### user.rbファイル

```
class User < ApplicationRecord
  has_many :groups, through: :group_users
  has_many :group_users
end
```
    
#### group.rbファイル
```
class Group < ApplicationRecord
    has_many :users, through: :group_users
    has_many :group_users
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
