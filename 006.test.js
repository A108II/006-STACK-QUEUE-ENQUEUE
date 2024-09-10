const MyQueue = require('./005')
// Test 1: Enqueue to an empty queue
it('should add an element to an empty queue', () => {
  const queue = new MyQueue();
  queue.enqueue(1);
  expect(queue.check()).toBe(1);
  expect(queue.isEmpty()).toBe(false);
});

// Test 2: Enqueue multiple elements
it('should enqueue multiple elements', () => {
  const queue = new MyQueue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.check()).toBe(1);
  expect(queue.isEmpty()).toBe(false);
});

// Test 3: Enqueue negative numbers
it('should enqueue negative numbers', () => {
  const queue = new MyQueue();
  queue.enqueue(-1);
  queue.enqueue(-2);
  expect(queue.check()).toBe(-1);
});

// Test 4: Enqueue zero
it('should enqueue zero', () => {
  const queue = new MyQueue();
  queue.enqueue(0);
  expect(queue.check()).toBe(0);
});

// Test 5: Enqueue decimal numbers
it('should enqueue decimal numbers', () => {
  const queue = new MyQueue();
  queue.enqueue(1.5);
  expect(queue.check()).toBe(1.5);
});

// Test 6: Enqueue string
it('should enqueue string', () => {
  const queue = new MyQueue();
  queue.enqueue('a');
  expect(queue.check()).toBe('a');
});

// Test 7: Enqueue boolean
it('should enqueue boolean', () => {
  const queue = new MyQueue();
  queue.enqueue(true);
  expect(queue.check()).toBe(true);
});

// Test 8: Enqueue null
it('should enqueue null', () => {
  const queue = new MyQueue();
  queue.enqueue(null);
  expect(queue.check()).toBe(null);
});

// Test 9: Enqueue undefined
it('should enqueue undefined', () => {
  const queue = new MyQueue();
  queue.enqueue(undefined);
  expect(queue.check()).toBe(undefined);
});
