

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string| null: false,index: ture|

### Association
- has_many :messages
- has_many :groups , through: :members
- has_many :members



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references| foreign_key: true,null: false|
|group_id|references| foreign_key: true,null: false|
|image|string|-|
|body|text|-|


### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :user , through: :members
- has_many :members




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

