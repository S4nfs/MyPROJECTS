<?php

// Let us create a simple linked list that contains three data nodes.
class Node
{
    public $data;
    public $next;
}

class Linkedlist
{
    public $head;
    public function __construct()  //constructor to create an empty LinkedList
    {
        $this->head = NULL;
    }

    //Add new element at the end of the list
    public function push_back($pushme)
    {
        $newnode = new Node();
        $newnode->data = $pushme;
        $newnode->next = NULL;

        if ($this->head == NULL) {
            $this->head = $newnode;  //if empty make the new node as head 
        } else {
            $temp = new Node();
            $temp = $this->head;
            while ($temp->next != NULL) { //checking last node 
                $temp = $temp->next;
            }
            $temp->next = $newnode; //putting at last
        }
    }

    public function printlist() //printing the list
    {               
        $current = $this->head;
        if ($current != NULL) {

            echo "Linked List data: ";
            while ($current != NULL) {
                echo $current->data . " ";
                $current = $current->next;
            }
        } else {
            echo "Linked List is empty";
        }
    }
}

//create an empty LinkedList
$myList = new Linkedlist();

//first node
$first = new Node();
$first->data = 10;
$first->next = NULL;
$myList->head = $first; //linking with head node

//second node
$second = new Linkedlist();
$second->data = 20;
$second->next = NULL;
$first->next = $second; //linking with first node

//third node
$third = new Linkedlist();
$third->data = 30;
$third->next = NULL;
$second->next = $third; //linking with second node

//pushing new node
// $obj2 = new Linkedlist();
$myList->push_back(40);

//echo all the data in the list
$myList->printlist();
