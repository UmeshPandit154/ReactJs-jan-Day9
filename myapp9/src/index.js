import React from 'react';
import ReactDOM from 'react-dom/client';

//1. import { someNamedImport } from someloction/somelibrary

//2. import someDefaultImport from somelocation/somelibrary 
import A from './components/A';





const root = ReactDOM.createRoot(document.getElementById('umesh'));
root.render(<A name="Umesh" surname="Pandit">Data2</A>);

