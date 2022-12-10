import React from "react";

const Sidebar = () => {
  return (
    <aside class="flex flex-col items-center bg-green-700 shadow-xl w-16 h-full fixed z-50 top-0">

    <ul>
        <li class="transition-colors hover:bg-green-600">
        <a
            href="#"
            class="h-16 px-5 flex flex justify-center items-center w-full transition-colors fill-white hover:fill-white active:fill-green-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg>
        </a>
        </li>

        <li class="transition-colors hover:bg-green-600">
        <a
            href="#ProductDetail"
            class="h-16 px-5 flex flex justify-center items-center w-full transition-colors fill-white hover:fill-white active:fill-green-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 9.236 2.247 15.968-3.405 15.968-9.457 0-5.812-5.701-10.007-12-10.007zm0 15c-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024 0 .566-.458 1.025-1.024 1.025zm1.606-4.858c-.74.799-.775 1.241-.766 1.785h-1.643c-.006-1.208.016-1.742 1.173-2.842.469-.446.84-.799.788-1.493-.047-.66-.599-1.004-1.117-1.004-.581 0-1.261.432-1.261 1.649h-1.646c0-1.966 1.155-3.237 2.941-3.237.849 0 1.592.278 2.09.783.468.473.709 1.125.7 1.883-.013 1.134-.704 1.878-1.259 2.476z"/></svg>
        </a>
        </li>

        <li class="transition-colors hover:bg-green-600">
        <a
            href="#Reviews"
            class="h-16 px-5 flex flex justify-center items-center w-full transition-colors fill-white hover:fill-white active:fill-green-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.33 1.465 2.826 4 6.001 4 3.134 0 5.665-2.521 5.999-4zm-9.5-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm9.5 2.002l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z"/></svg>
        </a>
        </li>

        <li class="transition-colors hover:bg-green-600">
        <a
            href="#CustomizeProduct"
            class="h-16 px-5 flex flex justify-center items-center w-full transition-colors fill-white hover:fill-white active:fill-green-300"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 21.832c4.587.38 2.944-4.493 7.188-4.538l1.838 1.534c.458 5.538-6.315 6.773-9.026 3.004zm14.065-7.115c1.427-2.239 5.847-9.749 5.847-9.749.352-.623-.43-1.273-.976-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.039 3.995-2.81zm-11.999 3.876c.666-1.134 1.748-2.977 4.447-3.262.434-2.087.607-3.3 2.547-5.112 1.373-1.282 4.938-4.409 7.021-6.229-1-2.208-4.141-4.023-8.178-3.99-6.624.055-11.956 5.465-11.903 12.092.023 2.911 1.081 5.571 2.82 7.635 1.618.429 2.376.348 3.246-1.134zm6.952-15.835c1.102-.006 2.005.881 2.016 1.983.004 1.103-.882 2.009-1.986 2.016-1.105.009-2.008-.88-2.014-1.984-.013-1.106.876-2.006 1.984-2.015zm-5.997 2.001c1.102-.01 2.008.877 2.012 1.983.012 1.106-.88 2.005-1.98 2.016-1.106.007-2.009-.881-2.016-1.988-.009-1.103.877-2.004 1.984-2.011zm-2.003 5.998c1.106-.007 2.01.882 2.016 1.985.01 1.104-.88 2.008-1.986 2.015-1.105.008-2.005-.88-2.011-1.985-.011-1.105.879-2.004 1.981-2.015zm10.031 8.532c.021 2.239-.882 3.718-1.682 4.587l-.046.044c5.255-.591 9.062-4.304 6.266-7.889-1.373 2.047-2.534 2.442-4.538 3.258z"/></svg>
        </a>
        </li>

        <li class="transition-colors hover:bg-green-600">
        <a
            href="#BuyProduct"
            class="h-16 px-5 flex flex justify-center items-center w-full transition-colors fill-white hover:fill-white active:fill-green-300"
        >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.558 7l4.701-4.702c.199-.198.46-.298.721-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.883zm12.001 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm7.441 2v2h-.642c-.534 0-1.022.305-1.257.786l-4.101 10.214h-12l-4.101-10.216c-.234-.48-.722-.784-1.256-.784h-.643v-2h24zm-15 4c0-.552-.448-1-1-1s-1 .448-1 1v5c0 .552.448 1 1 1s1-.448 1-1v-5zm4 0c0-.552-.448-1-1-1s-1 .448-1 1v5c0 .552.448 1 1 1s1-.448 1-1v-5zm4 0c0-.552-.447-1-1-1s-1 .448-1 1v5c0 .552.447 1 1 1s1-.448 1-1v-5z"/></svg>
        </a>
        </li>
    </ul>

    <div className="mt-auto pb-24">
        <p className="rotate-90 text-white text-2xl text-right font-['Helvetica'] font-extrabold">
            TheTumblrCo.
        </p>
    </div>
    </aside>
  );
};

export default Sidebar;
