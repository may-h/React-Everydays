class Node {
  constructor(data) {
    this.data = data; //다른 노드와 차별점을 두는 데이터
    this.children = []; //자식들과의 정보(주소)를 담는 배열
  }

  add(data) {
    //자식 추가하는 메소드
    this.children.push(new Node(data)); //자식 노드를 생성하고 배열에 저장한다.
  }

  remove(data) {
    //자식을 지우는 메소드
    this.children = this.children.filter(child => (child.data === data ? false : true)); //filter를 거쳐서 해당 자식을 제외시킨다.
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  BFS(fn) {
    //인자로 콜백 함수를 받는다.
    if (this.root === null) return;

    const unvisitedQueue = [this.root]; //방문하지 않은 노드들이 담겨 있는 큐
    while (unvisitedQueue.length !== 0) {
      const current = unvisitedQueue.shift(); //dequeue
      unvisitedQueue.push(...current.children); //현재 부모 노드의 자식들을 모두 다 큐에 담는다.
      fn(current); //현재 노드를 가지고 callback 함수 실행
    }
  }
}

const t = new Tree(); //빈트리 생성
t.root = new Node("a"); //루트가 node 'a'의 주소를 가리키면 'a'의 자식들까지 접근 가능하다.
t.root.add("b");
t.root.add("c");
t.root.children[0].add("d"); //'b'의 자식으로 'd'가 추가된다.

class Tree {
  constructor() {
    this.root = null;
  }

  DFS(fn) {
    if (this.root === null) return;

    const unvisitedList = [this.root];
    while (unvisitedList.length !== 0) {
      const current = unvisitedList.shift();
      unvisitedList.unshift(...current.children); //list앞에다 넣어준다.
      fn(current);
    }
  }
}

var a = 2;
