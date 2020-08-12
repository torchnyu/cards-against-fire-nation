import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    dict_sample = ''


    def start_requests(self):
        self.log("kkkkkkk")
        urls = [
            'http://atla.avatarspirit.net/transcripts.php'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)


    def parse(self, response):
        text = response.css("div.content table a::attr(href)").extract()
        self.log("hello")
        for cool in text:
            yield scrapy.Request(url=cool, callback=self.parse_links)

    def parse_links(self,response):
        smallurls = response.css("div.content").extract()
        yield {
		 'title': smallurls,

	 }
        self.log(yield['title'])




# import scrapy
#
# class QuotesSpider(scrapy.Spider):
#     name = "quotes"
#     dict_sample = ''
#
#
#     def start_requests(self):
#         self.log("kkkkkkk")
#         urls = [
#             'http://atla.avatarspirit.net/transcripts.php'
#         ]
#         for url in urls:
#             yield scrapy.Request(url=url, callback=self.parse)
#
#
#     def parse(self, response):
#         text = response.css("div.content table a::attr(href)").extract()
#         self.log("hello")
#         for cool in text:
#             yield scrapy.Request(url=cool, callback=self.parse_links)
#
#     def parse_links(self,response):
#         smallurls = response.css("div.content").extract()
#         self.log(smallurls)









        # page = response.url.split("/")[-2]
        # filename = 'quotes-%s.html' % page
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
        # self.log('Saved file %s' % filename)
