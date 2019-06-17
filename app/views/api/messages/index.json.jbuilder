json.array! @messages.each do |message|
  json.id message.id
  json.name message.user.name
  json.date message.created_at.strftime("%Y-%m-%d %H:%M:%S")
  json.content message.content
  json.image message.image.url
  
end
  
