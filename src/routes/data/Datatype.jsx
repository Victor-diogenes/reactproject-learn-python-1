import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./datatype.css"
import Seo from '../../seo/Seo'
import Footer from '../../footer/Footer'
import Side from '../side/Side'


const Datatype = () => {
    let navigate = useNavigate()
    const Navigate = () => {
        navigate('/datatypes')
    }
  return (
    <>
      <Seo
             title='Python Data Types'
             description='Python data types include lists, tuples, sets, and dictionaries..  Each data type has different characteristics.....read more..'
             name='vmdtutorials.'
             type='article'
      
      />
      <Side/>
        <main className='main-container'>
        <button className='upbutton3' onClick={() => navigate(-1)}> Previous page</button>
    
            
                <h1>Python data types</h1>
  <p>Data types are the most important aspect of programming. A better understanding of data types allows one to understand when and where certain data types should be used. When naming a variable, for example, a string is used. A list of Python data types is shown in the box below.</p>
                <p>Table</p>
                
<table>
  <tr>
    <th>Text type </th>
    <th>str</th>
 
  </tr>
  <tr>
    <td>sequence types</td>
    <td>list , tuple, range</td>

  </tr>
  <tr>
    <td>mapping type</td>
    <td>dict</td>
  
  </tr>
  <tr>
    <td>Set Types</td>
    <td>set, frozenset</td>
   
  </tr>
  <tr>
    <td>numeric types </td>
    <td>int, float, complex</td>

  </tr>
  <tr>
    <td>boolean type </td>
    <td> bool</td>
    
  </tr>
  <tr>
    <td>binary types bytes</td>
    <td>bytes, bytearray, memoryview</td>
 
  </tr>
                </table>
                
        
                <p>If you want to get the data type in Python, use the type() function in a print statement. The variable to be printed is then passed inside the type() function. For example.</p>
                <div className='block2'>
                    <p>age = 9</p>
                    <p>print(type(age))</p>
                </div>
                <p>Output</p>
                <div className='block2'>  <p>int</p></div>
                <p>So how do you set a data type? Data types are set by assigning a value to a variable.</p>
                <p>example</p>
                <div className='block2'>
                <p># String type</p>
                <p>name = "Peter" </p>
                <p>#integer Type</p>
                <p>age = 24 </p>
                <p>#float type</p>
                    <p>height = 6.2 </p>
                    </div>
                <p>Congratulation, now you know how to set a data type. Now let's dive into the details.</p>
                <h1>Python Numbers</h1>
         <p>Python numbers are classified as complex, float, or integer. Let's go over each type now. An integer is a positive natural number (1, 2, 3, etc.) or a negative integer with a minus sign (1, 2, 3, etc.). While floating-point arithmetic is arithmetic that uses a formulaic representation of real numbers to support a range-precision trade-off, A complex number is a number system that extends the real numbers by a specific element denoted i and satisfying the equation i2 = 1;</p>
               <div className='block2'> <p>example</p>
                <p>age = 24 # int</p>
                <p>height = 5.6 # float</p>
                    <p>mileage = 12j # complex</p></div>
                <p>If you want to make sure the data type assigned to a variable is a number , use casting.</p>
                <p>example</p>
                <div className='block2'><p>age = int(24)</p>
                <p>height = float(5.6)</p>
                    <p>mileage = complex(12j)</p></div>
                <span className='note'>Note</span><p>Type casting is a technique for converting variables/values declared in one data type to another in order to match the operation required by the code snippet.</p>

                <p>In some cases, you may need to convert one data type to another. This is possible with int(), float(), and complex().</p>
                <p>example</p>
               <div className='block2'> <p>x = 2 # int</p>
                <p>y= 6.7 #float</p>
                <p>k = 2j # complex</p>
                <p>#convert from int to float</p>
                <p>a = float(x)</p>
                <p>#convert from float to int</p>
                <p>b = int(y)</p>
                <p>#convert from int to complex</p>
                    <p>c = complex(x)</p></div>
                
                <h1>Python String</h1>
                <p>Strings in Python are regarded as arrays of bytes representing Unicode characters. To access a string element, use square brackets.Python strings are surrounded by either single or double quotation marks.
                    To assign a multiline string to a variable, use three single quotes or three double quotes.</p>
                <p>example</p>
                <div className='block2'>
                    <p># double quotation marks</p>
                    <p>name = "John"</p>
                    <p># single quotation marks</p>
                    <p>name= 'John'</p>
                    <p>#multiline </p>
                    <p>description = '''Use three single or three double quotes to assign a multiline string to a variable.To assign a multiline string to a variable, use three single quotes or three double quotes '''</p>
                    
                </div>
                <p>To return a portion of the string, specify the start and end indexes, separated by a colon.By omitting the end index, the range will be extended to the end. To begin the slice at the end of the string, use negative indexes.</p>
                    <p>example</p>
                   <div className='block2'> <p>name = 'John'</p>
                    <p>print (name[0:2])</p>
                    <p className=''>print(name[1:])</p>
                    <p>Output</p>
                    <p>jo</p>
                    <p>ohn</p></div>
                <h1>Boolean Data types</h1>
                <p>In programming, it is frequently necessary to determine whether an expression is True or False.In Python, you can evaluate any expression and get one of two answers: True or False.When you compare two values, Python evaluates the expression and returns the Boolean answer.
                </p>
                <p>example</p>
               <div className='block2'> <p>print(10 &lt; 9)</p>
                <p>print (9 &gt; 4)</p>
                    <p>print ( 4 == 4)</p>
                    <p>Output</p>
                <p>False</p><p>True</p><p>True</p></div>
                <h1>Python Tuples</h1>
                <p>
A tuple is a sequence data type that is similar to a list. A tuple is a set of values separated by commas. Tuples, unlike lists, are surrounded by parentheses.
                    The items in a tuple are ordered, unchangeable, and allow for duplicate values.</p>
                <p>creating a tuple</p>
                <div className='block2'>  <p>fruits = ('oranges', 'mangoes', pineapples')</p></div>
                <p>To create a tuple, you can also use the tuple() constructor.</p>
                <p>example</p>
                <div className='block2'><p>fruits = tuple(('mango', 'pineapples','oranges'))</p></div>
                <p>Use the len() function to determine the length of a tuple.</p>
                <p>example</p>
                <div className='block2'><p>fruits = ('oranges', 'mangoes', pineapples')</p><p>print(len(fruits))</p><p>Output</p><p>3</p></div>
                <span>Note</span><p>When making a tuple with only one item, you must include a comma after the item.</p>
                <p>example</p>
                <div className='block2'><p>fruit = ("mango",)</p></div>
          <h6 className='title'>How to access items in a tuple</h6>
          <p>
You can get tuple items by using the index number enclosed in square brackets.</p>
      <p>example
          </p>   
         <div className='block2'> <p>fruits =('mangoes', 'oranges', 'pineapples')</p>
          <p>print(fruits[2])</p>
          <p>print(fruits[1:2])</p>
          <p>output</p>
          <p>pineapples</p>
          <p>oranges</p></div>
<p className='title'>You cannot change the values of a tuple once it has been created. Tuples are unchangeable, or immutable as they are also known.However, there is a workaround. You can convert the tuple to a list, modify the list, and then convert the list back to a tuple.</p>
   <div className='block2'>       <p>example</p>
          <p>fruits =('mangoes', 'oranges', 'pineapples')</p>
          <p>list_of_fruits = list(fruits)</p>
          <p>list_of_fruits [1] = 'avocado'</p>
          <p>tuple_of_fruits = tuple(list_of_fruits)</p>
          <p>print(tuple_of_fruits)</p>
          <p>output</p>
            <p>('mangoes', 'avocado', 'pineapples')</p></div>
          <p>
            <h6>Unpacking</h6>
We can also extract the values back into variables in Python. This is known as "unpacking".</p>
          <p>example</p>
         <div className='block2'> <p>fruits =('mangoes', 'oranges', 'pineapples')</p>
          <p>(x, y, z) = fruits</p>
          <p>print(x)</p>
          <p>print(y)</p>
          <p>print(z)</p>
          <p>Output</p>
          <p>mangoes</p>
          <p>oranges</p>
            <p>pineapples</p></div>
          
          <h1>Python List</h1>
          <p>A Python string is a collection of characters surrounded by single, double, or triple quotes.
            List items can be ordered, changed, and have duplicate values.</p>
          <p>creating a list</p>
          <p>fruits = ['apples', 'mangoes', 'oranges']</p>
          <p>Use the len() function to find out how many items are in a list.</p>
          <p>When creating a new list, you can also use the list() constructor.</p>
          <p>example</p>
         <div className='block2'><p>fruits = (('aples', 'mangoes', avocado'))</p></div> 
          <h6 className='title'>manipulation of a list</h6>
          <p>
            Indexes and ranges of indexes can be used to access list items.</p>
          <p>example</p>
          <div className='block2'>  <p>
            fruits = ['apples', 'mangoes', 'oranges', 'avacado']</p>
            <p>print (fruits[1])</p>
            <p>print(fruits[-1])</p>
            <p>print(fruits[1: 3])</p>
            <p>print(fruits[1:])</p>
            <p>print(fruits[:2])</p>
            <p>print(fruits[-3:-1])</p></div> 
            <h6>Output</h6>
            <div className='block2'>  <p>mangoes</p>
            <p>oranges</p>
            <p>['mangoes', 'oranges']</p>
            <p>['mangoes', 'oranges', 'avacado']</p>
            <p>['apples', 'mangoes']</p>
            <p>['mangoes', 'oranges']</p></div>
          
          <p className='title'>Use append(), extend(), insert (), or the index number to change, add, or remove items from a list.</p>
          <h6 className='title'>example 1</h6>
          <div className='block2'>
           
            <p>fruits = ['mangoes', 'oranges']</p>
            <p>fruits [1] = 'avacado'</p>
            <p>print(fruits)</p></div>
            <h6>Output</h6>
          <div className='block2'>
            <p>['mangoes', 'avacado']</p>
</div>
          <h6 className='title'>example 2</h6>
          <div className='block2'>
            <p>fruits = ['apples', 'mangoes', 'oranges', 'avacado']</p>
            <p>fruits [1:2] = ["banana"]</p>
            <p>print(fruits)</p>

          </div>
          <h6>Output</h6>
      <div className='block2'>   <p>['apples', 'banana', 'oranges', 'avacado']</p>
          </div> 
          
          <h6  className='title'>example3</h6>
      <div className='block2'>   <p>fruits =["mangoes","oranges"]</p>
          <p>fruits.insert(1, "watermelon")</p>
            <p>print(fruits)</p></div>  
          <h6>Output</h6>
          <div className='block2'>
<p>['mangoes', 'watermelon', 'oranges']</p>
          </div>
          
          <h6 className='title'>Example 4</h6>
          <div className='block2'>
            <p>fruits =["mangoes","oranges"]</p>
            <p>fruits.append("avocado")</p>
            <p>print(fruits)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'>
            <p>['mangoes', 'oranges', 'avocado']</p>

          </div>
          <h6 className='title'>Example 5</h6>
          <div className='block2'>
            <p>fruits =["mangoes","oranges"]</p>
            <p>animals = ['cat','kiwi' ]</p>
            <p>fruits.extend(animals)</p>
            <p>print(fruits)</p>
          </div>
          <h6>Output</h6>
          <p>Output</p>
          <div className='block2'>
            <p>['mangoes', 'oranges', 'cat', 'kiwi']</p>
          </div>
          <h6 className='block2'>
          Example 6
</h6>
          <div className='block2'>
          <p>fruits = ['mangoes', 'oranges', 'avocado']</p>
            <p>fruits.remove('mangoes')</p>
            <p>print(fruits)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p>['mangoes', 'avocado']</p></div>

          <h6 className='title'> Example 7</h6>
     <div className='block2'>     <p>fruits = ['mangoes', 'oranges', 'avocado']</p>
            <p>fruits.clear()</p>
            <p>print(fruits)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p>[]</p></div>

          <h1 className='title'>python Sets</h1>
          <p>Sets are used to store a number of items in a single variable. Sets are denoted by curly brackets. A set is a collection that is unordered, unchangeable*, and unindexed.</p>
          <p className='title'>creating sets </p>
          <div className='block2'><p>animals = &#123;'cat', 'cow', 'lion'&#125;</p></div>
<p className='title'>
            To create a set, you can also use the set() constructor.</p>
          
          <p className='title'>Example</p>
          <div className='block2'> <p>animals = set(('cat', 'cow', 'lion'))</p></div> 
          
          <p className='title'>
            Many of the operations available for Python's other composite data types do not apply to sets. Sets, for example, cannot be indexed or sliced. Python, on the other hand, provides a plethora of operations on set objects that generally mimic the operations defined for mathematical sets.</p>
          <p>Let's access set items by looping through using a for loop.</p>
          <div className='block2'><p>animals =  &#123;'cat', 'cow', 'lion'&#125;</p>
            <p>for x in animals:</p>
            <p className='block3'>print(x)
</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p>cat</p><p>cow</p><p>lion</p></div>  
          
          <h6 className='title'>Example 2</h6>
          <div className='block2'><p >animals =  &#123;'cat', 'cow', 'lion'&#125;</p>
          <p>print(animals)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p>&#123;'cow', 'hyena', 'cat', 'lion'&#125;</p></div>
          
          <h6 className='title'> Example 2</h6>
          <div className='block2'><p>animals = &#123;'cat', 'cow', 'lion'&#125;</p><p>domestic = &#123;'sheep', 'dog'&#125;</p>
          <p>animals.update(domestic)</p><p>print(animals)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p> &#123;'sheep', 'dog', 'cat', 'cow', 'lion'&#125;</p></div>
          <span className='title'>Note</span>
          <p>You can add any iterable into a set </p>
          <p>example</p>
      <div className='block2'>  <p>animals = &#123;'cat', 'cow', 'lion'&#125;</p>
            <p>fruits = ['mangoes', 'oranges']</p>
          <p>animals.update(fruits)</p><p>print(animals)</p>
          </div>  
          <h6>Output</h6>
          <div className='block2'> <p>&#123;'cat', 'cow', 'oranges', 'mangoes', 'lion'&#125;</p></div>
<p className='title'>Make sure the item to be removed exists before using the remove() function; otherwise, Python will throw an error.</p>
    <p>
Other methods used to remove items from a set are del, clear(),pop(), discard().</p>      

          <h1 className='title'>Python Dictionary</h1>
          <p>Dictionaries are used to store key-value pairs of data values.</p>
          <p>A dictionary is an ordered*, changeable collection that does not allow duplicates.</p>
          <p className='title'>creating a dictionary</p>
          <div className='block2'><p className='block3'>info = &#123;
    "name": "John",
    "age": 25,
    "sex": "male"
    &#125;</p></div>
<p className='title'>Use the len() function to find out how many items are in a dictionary.</p>
<p>A dictionary's items can be accessed by referring to its key name, which is enclosed in square brackets.
</p>
          <p>Example</p>
          <div className='block2'><p>info =&#123;
    "name": "John",
    "age": 25,
    "sex": "male"&#125;
          </p><p>x = info['age']</p>
          <p>print(x)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p>25</p></div>
          

          <h6 className='title'> Example 2</h6>
          <div className='block2'><p>info = &#123;
    "name": "John",
    "age": 25,
    "sex": "male"&#125;
          </p>
            <p>x = info.get('age')</p> 
            <p>print(x)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'> <p>25</p></div>

          <p className='title'>You may want to look up the key or values in a dictionary at some point. You can get them by calling keys() or values().</p>
          <p>example</p>
          <div className='block2'><p>info = &#123;
    "name": "John",
    "age": 25,
    "sex": "male"
            &#125;</p>
            <p>x = info.keys()</p>
            <p>y = info.values()</p>
            <p>print(x)</p>
            <p>print(y)
            </p>
            
          </div>
          <h6>Output</h6>
       <div className='block2'>   <p>dict_keys(['name', 'age', 'sex'])</p>
          <p>dict_values(['John', 25, 'male'])</p></div>
          
          <h5 className='title'>Manipulation of the Dictionary</h5>
          <p>In this chapter, we are going to add, remove, and change items in a dictionary.</p>
        <p>In contrast to a set, which is unordered, unchangeable*, and unindexed, we can access its items using a key name.
          </p> 
          <h6 className='title'>example</h6>
          <div className='block2'><p>info =&#123;
    "name": "John",
    "age": 25,
    "sex": "male"
            &#125;</p><p>info['name'] = 'Peter'</p><p>print(info)</p> </div>
          <h6>Output</h6>
          <div className='block2'>
            <p>&#123;'name': 'Peter', 'age': 25, 'sex': 'male'&#125;</p>
          </div>
         
         
         <p className='title'>
The dictionary will be updated with the items from the given argument using the update() method.</p>
     <h6>Example</h6>    
      <div className='block2'><p>info = &#123;
    "name": "John",
    "age": 25,
    "sex": "male"
    &#125;
          </p> <p>info.update(&#123;"age": 20&#125;)</p>
          
          <p>print(info)</p>
          </div> 
          <h6>Output</h6>
          <div className='block2'><p>&#123;'name': 'John', 'age': 20, 'sex': 'male'&#125;</p> </div>
          <p className='title'>Let's now remove items from a dictionary.</p>
          <div className='block2'><p>info = &#123;
    "name": "John",
    "age": 25,
    "sex": "male"
            &#125;</p>
            <p>info.pop("sex")</p>
            <p>print(info)</p>
          </div>
          <h6>Output</h6>
          <div className='block2'><p>&#123;'name': 'John', 'age': 25&#125;</p></div>
         <p className='title'>
del, clear(), and popitem() are other methods for removing items from dictionaries ()</p>
         
   <p>You now understand different types of data in Python and how to manipulate them. Following that, we'll look at functions and classes.</p>      
 <button className='button1'  onClick={() => navigate(-1)    }> Previous page</button> <button className='button2' onClick={Navigate}>Next Page</button>
 
           
      </main>
      <Footer/>
      </>
  )
}

export default Datatype