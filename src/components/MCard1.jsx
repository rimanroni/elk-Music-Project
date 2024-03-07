import React from 'react';

const MCard1 = () => {
    return (
        <div className=' py-4'>
            <h1 className='text-center text-4xl font-bold py-2 mb-4'>SCHEDULE MUSIC EVENT</h1>
            <div className='grid grid-cols-1 gap-3 px-4 lg:grid-cols-3'>
                <div>
                    <div class="bg-white  shadow rounded-lg overflow-hidden">
                        <img src="s1.jpg" class="object-cover h-52 w-full" alt="" />
                        <div class="p-6">
                            <span class="block text-slate-400 font-semibold text-sm">Every Friday at 8:00 PM</span>
                            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                            Pop Band
                            </h3>
                            <p className='font-bold pt-2'>Singer "Lily Sparks" </p>
                            <p className='font-bold pt-2'>Place "Main Stage, City Park", </p>
                         </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white   shadow rounded-lg overflow-hidden">
                        <img src="s2.png" class="object-cover h-52 w-full" alt="" />
                        <div class="p-6">
                            <span class="block text-slate-400 font-semibold text-sm">Every Saturday at 9:00 PM</span>
                            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                                Rock Band
                                </h3>
                            <p className="font-bold pt-2">Singer  "Midnight Riders"</p>
                            <p className="font-bold pt-2">Place  "Rock Arena, Downtown"</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white   shadow rounded-lg overflow-hidden">
                        <img src="s4.jpg" class="object-cover h-52 w-full" alt="" />
                        <div class="p-6">
                            <span class="block text-slate-400 font-semibold text-sm">Every Thursday at 10:00 PM</span>
                            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                            Electronic/Dance Band
                                   </h3>
                                   <p className="font-bold pt-2">Singer "DJ Pulse" </p>
                                   <p className="font-bold pt-2">  Place "Club Neon, Waterfront", </p>
                            
                        </div>
                    </div>
                </div>

                <div>
                    <div class="bg-white  shadow rounded-lg overflow-hidden">
                        <img src="s5.jpg" class="object-cover h-52 w-full" alt="" />
                        <div class="p-6">
                            <span class="block text-slate-400 font-semibold text-sm">Every Sunday at 7:00 PM</span>
                            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                            R&B/Soul Band
                                </h3>
                                <p className="pt-2 font-bold">Singer "Velvet Soul" </p>
                                <p className="pt-2 font-bold">Place "Soul Lounge, City Center" </p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white   shadow rounded-lg overflow-hidden">
                        <img src="s6.jpg" class="object-cover h-52 w-full" alt="" />
                        <div class="p-6">
                            <span class="block text-slate-400 font-semibold text-sm">Every Wednesday at 8:30 PM</span>
                            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                            Hip Hop/Rap Band 
                            </h3>
                            <p className='pt-2 font-bold'>Singer "MC Flow"</p>
                            <p className='pt-2 font-bold'> Place: "Urban Warehouse, Industrial District"</p>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white   shadow rounded-lg overflow-hidden">
                        <img src="12.webp" class="object-cover h-52 w-full" alt="" />
                        <div class="p-6">
                            <span class="block text-slate-400 font-semibold text-sm">Every Tuesday at 7:30 PM</span>
                            <h3 class="mt-3 font-bold text-lg pb-4 border-b border-slate-300">
                            Country Musci Band
                                </h3>
                                <p className="pt-2 font-bold">Singer "Dusty Trails"</p>
                                <p className="pt-2 font-bold">Place "Country Barn, Outskirts"</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MCard1;