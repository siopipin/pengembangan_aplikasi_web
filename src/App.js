import React from 'react'

import HeaderHomePage from './components/HeaderHomePage'
import Footer from './components/Footer'
import DataHobi from './components/DataHobi'
import { dataHobi, judul, title, listPegawai } from './data/dataHobi'

function GarisPemisah() {
  return (
    <hr />
  )
}

function App() {
  // var dataHobi = ['Nyanyi', 'Belajar', 'Berenang', 'Memasak']

  const listPegawai =  [
    {
        "id": 22,
        "nama": "Adin",
        "email": "admin@simbio.id",
        "privilege": 2,
        "foto": "1693385625837e4230330-4296-4aff-b925-d27105ac03b5.jpg"
    },
    {
        "id": 5,
        "nama": "Admin",
        "email": "admin@simbio.id",
        "privilege": 1,
        "foto": "1566579614411logo-customer.png"
    },
    {
        "id": 21,
        "nama": "Ananda",
        "email": "Ananda@gmail.com",
        "privilege": 2,
        "foto": "169295534278763372121-a6b5-4260-9042-f328d7a3097e.jpg"
    }
    
]

  return (
    <div>
      {/* header */}
      <HeaderHomePage />

      <GarisPemisah />
      {/* body */}
      <DataHobi dataArr={dataHobi}/>
      
      {/* footer */}
      <GarisPemisah />
      <Footer namaKelas={judul} />
      <p>{title}</p>

      <ul>
        {listPegawai.map((item) => {
          return (
            <li><p>{item.id} - {item.nama}</p></li>
          )
        })}
      </ul>


    </div>
  )
}

export default App
