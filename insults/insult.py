import random

with open("adjectives") as f:
	adjectives = f.read().splitlines()
with open("nouns") as f:
	nouns = f.read().splitlines()

random.seed()
adjective = random.choice(adjectives).upper()
noun = random.choice(nouns).upper()

print('You '+adjective+' '+noun+'!')