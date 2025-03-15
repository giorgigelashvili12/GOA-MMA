import React, { useState } from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Switch } from '@headlessui/react';
import { Info } from 'lucide-react';

export default function Footer() {
    const countries = [
        { id: 1, img: '/flags/GEO.png', num: '+995', name: 'GEO' },
    ];

    const [selectedCountry, setCountry] = useState(countries[0]);
    const [query, setQuery] = useState("");
    const [enabled, setEnabled] = useState(false);
    const [submittedData, setSubmittedData] = useState({});

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    function Submit() {
        if (name.trim() === "") {
            alert('გთხოვთ მიუთითოთ სახელი!');
            return;
        }

        if (phone.trim() === "") {
            alert('გთხოვთ მიუთითოთ ტელეფონის ნომერი!');
            return;
        }

        const data = {
            name: name.trim(),
            phone: selectedCountry.num + phone.trim(),
            smsOptIn: enabled,
        };

        console.log('form submitted', data);

        fetch('http://localhost:5001/api/v1/send-sms', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            alert(result.message);
            setSubmittedData(data);
        })
        .catch(error => {
            console.error('SMS Error ', error);
            alert('შეტყობინების გაგზავნა ვერ მოხერხდა');
        });
    }

    let filteredCountries;
        if (query === "") {
            filteredCountries = countries;
        } else {
            filteredCountries = countries.filter((country) =>
                country.name.toLowerCase().includes(query.toLowerCase())
            );
        }

    return (
        <div className='flex flex-row md:flex-col 2xl:flex-row lg:flex-col justify-center items-center gap-30 bg-white p-25 mt-10 sm:flex-col sm:p-0 sm:gap-10'>
            <div className='flex flex-col gap-10 mr-10'>
                <div>
                    <h2 className='text-2xl font-bold'>შემოგვიერთდი</h2>
                    <h4>მზად ვართ დავიწყოთ თავგადასავალი თქვენთან ერთად</h4>
                </div>
                <div>
                    <h4 className='text-rose-600 hover:underline hover:text-rose-700 cursor-pointer'>(+995) 32 XXX XXXX</h4>
                    <h4 className='text-rose-600 hover:underline hover:text-rose-700 cursor-pointer'>goamartialarts@gmail.com</h4>
                </div>
                <div>
                    <p>თქვენი სახელი <span className='text-rose-600 font-bold'>*</span></p>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className='border-b-2 focus:outline-none w-2xs p-2' 
                        type="text" 
                        required 
                    />
                </div>
                <div className='flex items-center gap-3'>
                    <Combobox value={selectedCountry} onChange={setCountry} onClose={() => setQuery("")}>
                        <div className="flex items-center gap-2 border-b-2 w-20 p-2">
                            <img src={selectedCountry.img} alt={selectedCountry.name} className="w-6 h-4 rounded-sm" />
                            <ComboboxInput
                                aria-label="Country"
                                displayValue={(country) => (country ? country.name : "")}
                                onChange={(event) => setQuery(event.target.value)}
                                className="focus:outline-none flex-1"
                            />
                            <span className="text-gray-500">{selectedCountry.num}</span>
                        </div>
                        <div>
                            <input 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                className="flex items-center gap-2 border-b-2 w-2xls p-2" 
                                type="tel" 
                                required 
                            />
                        </div>
                        <ComboboxOptions anchor="bottom" className="border bg-white rounded-md shadow-lg mt-1">
                            {filteredCountries.map((country) => (
                                <ComboboxOption key={country.id} value={country} className="flex items-center gap-5 p-2 cursor-pointer hover:bg-gray-100">
                                    <img src={country.img} alt={country.name} className="w-6 h-4 rounded-sm" />
                                    <span>{country.name}</span>
                                    <span className="text-gray-500">({country.num})</span>
                                </ComboboxOption>
                            ))}
                        </ComboboxOptions>
                    </Combobox>
                    <div className='flex items-center gap-2 pl-4 border-l-2'>
                        SMS OPT-IN
                        <Switch checked={enabled} onChange={setEnabled} className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-rose-700">
                            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                        </Switch>
                    </div>
                </div>
                <p className='mr-10 flex gap-2'><Info />როდესაც თქვენ რთავთ SMS OPT-IN-ს, თქვენ  <br/> მიიღებთ ყველა საჭირო ინფორმაციას SMS-ის საშუალებით.</p>
                
                <button onClick={Submit} className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700">
                    გაგზავნა
                </button>
            </div>
            
            <div>
                <iframe className='w-210 h-200 sm:w-150 sm:h-150' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d886.060914774196!2d44.799176038452316!3d41.77956117637386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ska!2sge!4v1740241339502!5m2!1ska!2sge" allowFullScreen loading="lazy"></iframe>
            </div>
        </div>
    );
}