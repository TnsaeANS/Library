class NotificationMailer < ApplicationMailer
    def overdue_notification(user, book)
      @user = user
      @book = book
      begin
        mail(to: @user.email, subject: 'Overdue Book Notification')
      rescue => e
        Rails.logger.error "Error sending email: #{e.message}"
      end
    end
end