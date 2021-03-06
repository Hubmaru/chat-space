# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|email|string|null: false, unique: true|
|name|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :users_groups
- has_many :groups,  through:  users_groups
- has_many :messages

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|
### Association
- has_many :users_groups
- has_many :users,  through:  users_groups
- has_many :messages

## users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|body|text|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group