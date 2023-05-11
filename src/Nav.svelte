<script>
  import { country } from "./stores";
  import { getCountryByID } from "./countries";
  import { onMount } from "svelte";
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "sveltestrap";

  let isOpen = false;
  let navCountry = getCountryByID("default");

  country.subscribe((value) => {
    if (value !== null) {
      navCountry = value;
    }
  });

  const handleCountryUpdate = (value) => {
    country.set(getCountryByID(value));
  };

  const handleUpdate = (event) => {
    isOpen = event.detail.isOpen;
  };
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/css/flag-icons.min.css"
    integrity="sha512-UwbBNAFoECXUPeDhlKR3zzWU3j8ddKIQQsDOsKhXQGdiB5i3IHEXr9kXx82+gaHigbNKbTDp3VY/G6gZqva6ZQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<Navbar color="light" light expand="md" class="fixed-top">
  <NavbarBrand href="#/">
    <img src="img/ptycoin-72x72.png" alt="" width="24" height="24" class="d-inline-block align-text-top" />
    PTYcoin
  </NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav navbar>
      <NavItem>
        <NavLink href="#/faq">FAQ</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#/services">Servicios</NavLink>
      </NavItem>
    </Nav>
    <Nav navbar class="ms-auto">
      <Dropdown>
        <DropdownToggle nav caret>
          <span class="flag-icon flag-icon-{navCountry.iso.toLocaleLowerCase()}" />
          {navCountry.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem on:click={() => handleCountryUpdate("panama")}>
            <span class="flag-icon flag-icon-pa" />
            Panamá
          </DropdownItem>
          <DropdownItem on:click={() => handleCountryUpdate("costa-rica")}>
            <span class="flag-icon flag-icon-cr" />
            Costa Rica
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  </Collapse>
</Navbar>
