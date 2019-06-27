```

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer| |
|name|string| null: false,index: ture|

### Association
- has_many : messages
- has_many : groups , through:members





## messageテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer| foreign_key: true|
|group_id|integer| foreign_key: true|
|image|text| |
|body|text| null:false|


### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer| |
|name|string|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :user , through:members




## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

```