class HomeController < ApplicationController

  def index
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    m = Mandrill::API.new
    message = { 
    :subject=> "Omg this is the subject", 
    :from_name=> "this is from joe",
    :from_email=>"hello@cooksmarts.com",
    :to=>[  
     {  
       :email=> "dooffycom@gmail.com",  
       :name=> "steve" 
     }  
    ],
    :html=>render_to_string('mailer/new_email', :layout => false), 
    :preserve_recipients => false
    } 
    sending = m.messages.send message
    redirect_to ''
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
