## Fantasy

Fantasy is a version control app for running tabletop roleplaying games. These games hold a tremendous amount of data, from character stats to maps and items. This app makes keeping a consistent master copy of all of this information easy, while allowing for multiple contributors.

### Phase I

The first phase of this project was to create a baseline functionality for any user. Users need to be able to create campaigns, search for other users to invite to these campaigns, and accept or reject these invitations from other users. Currently, most of the content is private. Users can only view their own profiles and campaigns they have either created or been invited too. Eventually, profiles and campaign pages may distinguish between publicly and privately viewable content instead of redirecting users away from private content.

#### Features:
  * Authentication
  * Create/Delete Campaigns
  * Auto-Suggest User Search
  * Campaign Invitations
  * Remove Campaign Members

### Phase II

The second phase focuses on the GM created content, namely lore, racial and occupation templates, maps, and story/plot hooks.

As a GM, users can create new pages for any of this content, and set it as public or private depending on whether players should be able to view it or not.

These pages will be organized within a repository structure, with each folder containing folders and/or pages. Private pages or folders will be invisible to players viewing the repository.

To edit the pages, GMs will employ a rich text editor that will allow for embedded images.

#### Features:
  * Create/Delete Folders
  * Create/Delete Pages
  * Toggle Privacy of Folders/Pages
  * Rich Text Editor for Pages

### Phase III

The third phase of this app is centered on player created content. Players can add any of their characters to any of the campaigns they have been invited to. This way GMs will always be able to view the most current form of any characters belonging to their campaign.

GMs can add their own characters to their campaign as well. All PCs and NPCs can be accessed from the same place.

Players can view and update their own characters at any point, but cannot view or edit anyone else's.
