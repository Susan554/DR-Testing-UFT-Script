SystemUtil.Run "iexplore.exe","https://news.yahoo.com/"
Browser("Yahoo News - Latest News").Page("Yahoo News - Latest News").Link("World").Click @@ hightlight id_;_Browser("Yahoo News - Latest News").Page("Yahoo News - Latest News").Link("World")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Yahoo News - Latest News").Page("World Latest News and").Link("Climate Change").Click @@ hightlight id_;_Browser("Yahoo News - Latest News").Page("World Latest News and").Link("Climate Change")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Yahoo News - Latest News").Page("Climate Change Latest").Sync @@ hightlight id_;_Browser("Yahoo News - Latest News").Page("Climate Change Latest")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Yahoo News - Latest News").CloseAllTabs @@ hightlight id_;_528788_;_script infofile_;_ZIP::ssf5.xml_;_

