class Hierarchy:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
       if not boss:
          self.subordinates[person] = []
          self.scores[person] = 1
          return

       self.scores[boss] += 1

       if len(self.subordinates[boss]) < self.k:
          self.subordinates[boss].append(person)
          self.subordinates[person] = []
          self.scores[person] = 1
       else:
           self.add_person(self.subordinates[boss][0], person)
    
    def get_score(self, person):
      return self.scores[person]



    # def get_score(self, person):
    #     if person in self.scores:
    #         print("Já calculei esse score antes")
    #         return self.scores[person]

        # this_score = 1

        # for subordinate in self.subordinates[person]:
        #     this_score += self.get_score(subordinate)
        # self.scores[person] = this_score

        # return this_score

if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }
hierarchy = Hierarchy(2)
    hierarchy.add_person(None, 1)
    hierarchy.add_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.add_person(2, 4)
    hierarchy.add_person(4, 5)
    hierarchy.add_person(4, 6)
    hierarchy.add_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")

    hierarchy.add_person(4, 8)
    hierarchy.add_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")