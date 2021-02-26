const LinkedList = require('./LinkedList')

const ll = new LinkedList.fromValues(10, 20, 30, 40, 50, 60, 70, 80, 90)

ll.print()
ll.insertAtIndex(2, -1)
ll.print()
