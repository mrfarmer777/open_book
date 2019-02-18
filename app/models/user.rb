class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, :omniauth_providers=> [:google_oauth2]
         
    has_many :entries
    has_many :books, through: :entries
    
    has_secure_password
    
    
    def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.token=auth.credentials.token
        user.expires=auth.credentials.expires
        user.expires_at=auth.credentials.expires_at
        user.refresh_token=auth.credentials.refresh_token
      end
    end
end
