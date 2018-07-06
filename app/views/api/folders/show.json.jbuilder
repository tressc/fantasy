json.folder do
  json.partial! 'api/folders/folder', folder: @folder
end

json.pages do
  @folder.pages.each do |page|
    json.set! page.id do
      json.partial! 'api/pages/page', page: page
    end
  end
end
