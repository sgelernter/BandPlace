json.extract! release, :id, :title, :description, :artist_id, :created_at

json.coverArtUrl url_for(release.cover_image)