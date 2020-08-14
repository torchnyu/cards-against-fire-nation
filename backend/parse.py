from bs4 import BeautifulSoup
counter = 0


def parse():
    counter = 0
    for x in range(0,133):
        with open(f"avatar{counter}") as f:
            data = f.read()
        soup = BeautifulSoup(data, features = "lxml")
        text = soup.get_text()
        with open(f"avatar{counter}","w") as f:
            f.write(text)
        counter += 1

parse()
