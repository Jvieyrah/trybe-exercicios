class MainMemory:
  def __init__(self):
     self.clean()
     self.loaded_memory = []


  def get(self, index):
    try:
      return float(self.loaded_memory[index])
    except IndexError:
      return 0
    
    
  def load(self, value):
    return self.loaded_memory.append(value)


  def clean(self):
    self.loaded_memory = []
