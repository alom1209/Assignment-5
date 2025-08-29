What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
        By using getElementById,we can select one element by its id attribute.IDs are always unique in html.As a result,it always returns at most one element.

        By using getElementsByClassName,we can select a collection with same class name.When the dom changes in this section,the collection is changed automatically according to the function.

        By using querySelector,we can select the very first element of a css selector.It can work with #id,.class,tag,attributes etc.

        By using querySelectorAll,we can select all the elements of a css selector.But in this case,it does not auto-update if DOM changes.

2.How do you create and insert a new element into the DOM?
Answer:
       At first,we can use document.createElement() for creating a new element in the DOM.Then after creating the element and also setting necessary attributes to the element ,we can use append option for inserting this new element into the parent node which is in the DOM.

3.What is Event Bubbling and how does it work?
Answer: 
       When I trigger an event (like a "click") on a child element, the event first happens on that element and then bubbles up through its parent elements in the DOM tree — all the way up to the document (and even window). This is called Event Bubbling.
       There are three phases in the Event Bubbling. 
       1.Capturing phase (top → down, rarely used)

       2.Target phase (event hits the target element)

       3.Bubbling phase (bottom → up, the default one)  

4.What is Event Delegation in JavaScript? Why is it useful?
Answer:  
        Event delegation is a JavaScript pattern where you attach a single event listener to a parent element instead of attaching individual listeners to each child.
        When an event happens on a child, it bubbles up to the parent, and the parent’s listener handles it.
        1.It is very useful because we can add only one event listener to the parent.It is time saving and also reduces memory.
        2.We can also add dynamic elements via Event Delegation.
        3.It keeps the code neat and clean. It also keeps the code readable.

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:
        preventDefault(): In this case,it prevents the browser from its deafult behaviour for an event.
        stopPropagation(): It stops the event from bubbling up the DOM.It won't prevent the target element from executing and also it won't move to parents.
        These are the basic differences between them.