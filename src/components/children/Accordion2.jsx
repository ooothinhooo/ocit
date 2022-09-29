import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Accordion2({ title, desc }) {
    return (
        <AnimatePresence>
            <div class="flex flex-wrap justify-start overflow-hidden bg-slate-900 text-white">
                <label class="grow px-4 py-3 font-medium" for="collapse">
                    {title}
                </label>
                <input
                    class="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox"
                    name="collapse"
                    id="collapse"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <motion.div class="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
                    {desc}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default Accordion2;
